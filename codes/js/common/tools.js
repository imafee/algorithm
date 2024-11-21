export function typeName(value) {
  const longName = Object.prototype.toString.call(value).toLowerCase(); // '[object object]'
  const shortName = longName.split(" ")[1].split("]")[0];
  return shortName;
}
