import bcrypt from 'bcryptjs';
import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '../../libs/db';
import User from '@/models/user';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    connectMongo();
    const body = JSON.parse(req.body);
    const { name, email, password } = body;
    let hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ user });
  }
}
