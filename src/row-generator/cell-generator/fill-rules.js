export function shouldFill(isCellAboveFilled, neighbours) {

  return (
    !isCellAboveFilled && (neighbours === 2 || neighbours === 3)
  ) || (
    isCellAboveFilled && (neighbours === 2 || neighbours === 4)
  );
}
