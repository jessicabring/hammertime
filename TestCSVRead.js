const csv2json = (str, delimiter = ',') => {
    const titles = str.slice(0, str.indexOf('\n')).split(delimiter);
    const rows = str.slice(str.indexOf('\n') + 1).split('\n');
    return rows.map(row => {
      const values = row.split(delimiter);
      return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
  };
  
  
  let csv = /Users/jessicarenee/Documents/hammertime/databased.csv;
  let word_array = csv2json(csv,' ');
  console.log(word_array)
