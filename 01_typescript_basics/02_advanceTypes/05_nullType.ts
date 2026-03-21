function getName(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("Holaa");
  }
}

getName(undefined);
