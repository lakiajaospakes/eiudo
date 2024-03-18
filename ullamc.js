const elements = [1, 2, 3, null, 4, 5, undefined, 6, 7];

for (let i = 0; i < elements.length; i++) {
  if (!elements[i]) continue;

  console.log(elements[i]);
}
