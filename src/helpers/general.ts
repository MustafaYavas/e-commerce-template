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
