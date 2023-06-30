function telephoneFormat(telephone: string | null): string | null {
  return telephone
    ? telephone // (17) 98115-6716 - exemplo
        .replaceAll("(", "") // 17) 98115-6716
        .replaceAll(")", "") // 17 98115-6716
        .replaceAll(" ", "") // 1798115-6716
        .replaceAll("-", "") // 17981156716
    : null;
}

export { telephoneFormat };
