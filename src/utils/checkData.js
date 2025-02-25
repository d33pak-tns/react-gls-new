export const isArrayData = (data) => {
  // console.log(data);
  if (Array.isArray(data)) {
    // console.log(`true..c1`);
    return true;
  } else if (data && Array.isArray(data.users)) {
    // console.log(`true..c2`);
    return true; 
  } else {
    // console.log(`false..c3`);
    return false;
  }
};
