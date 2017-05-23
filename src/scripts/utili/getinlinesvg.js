const svgsPath = '../../icons'

export const getInlineSvg = (files) => {
  let results = {}
  for(let file in files){
    const inlineSvg = require(`../../icons/${files[file]}.svg`)
    results[files[file]] = inlineSvg;
  }

  return results
}
