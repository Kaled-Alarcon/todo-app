const generateUUID = () => {
   let uuid = "";

   let uuidDay = new Date().getDate();
   let uuidHour = new Date().getHours();
   let uuidSeg = new Date().getSeconds();

   const uuidMath = Math.random() * 1000;
   let uuidRandom = Math.round(uuidMath);
   const uuidMath2 = Math.random() * 1000;
   let uuidRandom2 = Math.round(uuidMath2);

   while (uuidRandom.toString().length !== 3) {
      const uuidMath = Math.random() * 1000;
      uuidRandom = Math.round(uuidMath);
   }

   while (uuidRandom2.toString().length !== 3) {
      const uuidMath = Math.random() * 1000;
      uuidRandom2 = Math.round(uuidMath);
   }

   if (uuidDay.toString().length === 1) {
      uuidDay = uuidDay * 10;
   }

   if (uuidHour.toString().length === 1) {
      uuidHour = uuidHour * 10;
   }

   if (uuidSeg.toString().length === 1) {
      uuidSeg = uuidSeg * 10;
   }

   if (uuidRandom.toString().length === 1) {
      uuidRandom = uuidRandom * 10;
   }

   if (uuidRandom.toString().length < 3) {
      uuidRandom = uuidRandom * 10;
   }

   if (uuidRandom2.toString().length === 1) {
      uuidRandom2 = uuidRandom2 * 10;
   }

   if (uuidRandom2.toString().length < 3) {
      uuidRandom2 = uuidRandom2 * 10;
   }

   uuid = `${uuidRandom}${uuidRandom2}${uuidDay}${uuidHour}${uuidSeg}`;
   return uuid;
};

export default generateUUID;
