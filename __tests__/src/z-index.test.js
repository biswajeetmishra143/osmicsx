import zIndex from "../../src/z-index";

test("z-0 namespace", () => {
  expect(zIndex["z-0"]).toEqual({ zIndex: 0 })
})

test("z-10 namespace", () => {
  expect(zIndex["z-10"]).toEqual({ zIndex: 10 })
})

test("z-20 namespace", () => {
  expect(zIndex["z-20"]).toEqual({ zIndex: 20 })
})

test("z-30 namespace", () => {
  expect(zIndex["z-30"]).toEqual({ zIndex: 30 })
})

test("z-40 namespace", () => {
  expect(zIndex["z-40"]).toEqual({ zIndex: 40 })
})

test("z-50 namespace", () => {
  expect(zIndex["z-50"]).toEqual({ zIndex: 50})
})
