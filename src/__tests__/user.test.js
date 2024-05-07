import { username, city, image } from "../data/user";

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Nova");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://www.freepik.com/free-photo/animal-wild-nature-undomesticated-cat-close-up-portrait-generative-ai_40937240.htm#fromView=search&page=1&position=26&uuid=2672ea5a-97e9-4927-8f7a-9eac85beb366");
});
