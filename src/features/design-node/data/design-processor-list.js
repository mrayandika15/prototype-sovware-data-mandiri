function createData(status, processor) {
  return {
    status,
    processor,
  };
}

export const designProcessorList = [
  createData("running", "processor-1"),
  createData("running", "processor-2"),
  createData("running", "processor-3"),
];
