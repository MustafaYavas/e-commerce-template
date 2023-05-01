export const createLinkFromName = (name: string) => {
  return name.replaceAll(' ', '-').toLowerCase();
};

export const createCapitalizeString = (text: string) => {
  let textArr = text.split('-');
  let capitalizeTitle = '';
  for (let i = 0; i < textArr.length; i++) {
    capitalizeTitle +=
      textArr[i][0].toUpperCase() + textArr[i].substring(1) + ' ';
  }
  return capitalizeTitle;
};

export const getCategoryImage = (categoryName: string) => {
  if (categoryName === 'sale') return '/images/home2.jpg';
  else if (categoryName === 'dining') return '/images/dining.jpg';
  else if (categoryName === 'living') return '/images/living.jpg';
  else if (categoryName === 'bedroom') return '/images/bedroom.jpg';
  else return '/images/home2.jpg';
};
