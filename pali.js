

function checkPali(str) {
  return str.replace(/[\W_]/g, "")
    .toLowerCase()===
  str.replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
}

//W does NOT catch _

