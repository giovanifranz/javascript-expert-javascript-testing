const { error } = require("./src/constants.js");
const File = require("./src/file.js");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  Date.prototype.getFullYear = () => 2020;

  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGHT_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        id: 123,
        name: "Erick Wendel",
        profession: "Javascript Instructor",
        birthDate: 1995,
      },
      {
        id: 321,
        name: "Xuxa da Silva",
        profession: "Javascript Specialist",
        birthDate: 1940,
      },
      {
        id: 231,
        name: "Joaozinho",
        profession: "Java Developer",
        birthDate: 1990,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
