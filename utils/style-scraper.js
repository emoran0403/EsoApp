/**
 * This utility copies table data from https://en.uesp.net/wiki/Online:Styles
 * It was used to create materials.ts, motifs.ts, styles.ts, and style_infos.ts files
 */

(() => {
  let data = [];

  let ALL_CELLS = [...[...document.getElementsByTagName("tbody")][0].children];

  for (let i = 0; i < ALL_CELLS.length; i++) {
    let style = [...[...ALL_CELLS[i].children][0].children][0].innerText;

    let material = [...ALL_CELLS[i].children][1].children[1].innerText;

    let motif = [...ALL_CELLS[i].children][2].children[1].innerText;

    let info = {
      style,
      material,
      motif,
    };
    // data.push(motif);
    // data.push(material);
    // data.push(motif);
    data.push(info);
  }

  console.log(data);
  copy(data);
})();
