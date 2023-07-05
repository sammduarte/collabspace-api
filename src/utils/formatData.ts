function telephoneFormat(telephone: string | null): string | undefined {
  return telephone
    ? telephone // (17) 98115-6716 - exemplo
        .replaceAll("(", "") // 17) 98115-6716
        .replaceAll(")", "") // 17 98115-6716
        .replaceAll(" ", "") // 1798115-6716
        .replaceAll("-", "") // 17981156716
    : undefined;
}

export { telephoneFormat };
