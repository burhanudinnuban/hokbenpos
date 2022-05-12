export const toUpperCase = (str, key) => {
  switch (key) {
  case 1:
    return str.charAt(0).toUpperCase() + str.substr(1);
  case 2:
    return str.
      toLowerCase().
      split(" ").
      map((s) => s.charAt(0).toUpperCase() + s.substring(1)).
      join(" ");
  case 3: 
    return str.toUpperCase();
  default:
    break;
  }
};

export const money =  new Intl.NumberFormat("id-ID", {
  currency: "IDR",

  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});