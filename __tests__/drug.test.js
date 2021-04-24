const supertest = require("supertest");
const app = require("../index");

const request = supertest(app);
const sequelize = require("../config/connection");

describe("Getting data from API - Drugs", () => {
  beforeAll(async () => {
    await sequelize.authenticate();
  });

  it("Calling GET endpoint without parameters", async () => {
    // Sends GET Request to /test endpoint

    const res = await request.get("/drugs");
    expect(res.status).toBe(200);
    expect(res.body[0]).toHaveProperty("id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0]).toHaveProperty("category");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("individual_price");
    expect(res.body[0]).toHaveProperty("quantity");
    expect(res.body[0]).toHaveProperty("brand");
    expect(res.body[0]).toHaveProperty("created_at");
    expect(res.body[0]).toHaveProperty("updated_at");

    // ...
  });
  it("Calling GET endpoint by id", async () => {
    // Sends GET Request to /test endpoint

    const res = await request.get("/drugs/2");
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0]).toHaveProperty("id");
    expect(res.body[0]).toHaveProperty("name");
    expect(res.body[0]).toHaveProperty("category");
    expect(res.body[0]).toHaveProperty("description");
    expect(res.body[0]).toHaveProperty("individual_price");
    expect(res.body[0]).toHaveProperty("quantity");
    expect(res.body[0]).toHaveProperty("brand");
    expect(res.body[0]).toHaveProperty("created_at");
    expect(res.body[0]).toHaveProperty("updated_at");

    // ...
  });

  it("Calling POST and DELETE endpoint", async () => {
    const resBefore = await request.get("/drugs");
    expect(resBefore.status).toBe(200);

    const obj = {
      name: "Remedio",
      category: "Remedio",
      description: "remedio",
      individual_price: 3.5,
      quantity: 100,
      brand: "generico",
    };
    const resPost = await request.post("/drugs").send(obj);
    expect(resPost.status).toBe(200);
    expect(resPost.body).toHaveProperty("id");
    expect(resPost.body).toHaveProperty("name");
    expect(resPost.body).toHaveProperty("category");
    expect(resPost.body).toHaveProperty("description");
    expect(resPost.body).toHaveProperty("individual_price");
    expect(resPost.body).toHaveProperty("quantity");
    expect(resPost.body).toHaveProperty("brand");
    expect(resPost.body).toHaveProperty("created_at");
    expect(resPost.body).toHaveProperty("updated_at");

    const resAfter = await request.get("/drugs");
    expect(resAfter.status).toBe(200);
    expect(resAfter.body.length).toBeGreaterThan(resBefore.body.length);

    const resDel = await request.delete("/drugs/"  +  resPost.body.id);
    expect(resDel.status).toBe(200);

    const resAfter2 = await request.get("/drugs");
    expect(resAfter2.status).toBe(200);
    expect(resAfter2.body.length).toBeLessThan(resAfter.body.length);
    expect(resAfter2.body.length).toBe(resBefore.body.length);

    // ...
  });

  it("Calling UPDATE endpoint", async () => {
    const res = await request.get("/drugs/2");
    expect(res.status).toBe(200);
    const oldName = res.body.name;
    const newName = oldName + "New";

    const obj = {
      name: newName,
    };
    const resPut = await request.put("/drugs/2").send(obj);
    expect(resPut.status).toBe(200);
    expect(resPut.body).toHaveProperty("id");
    expect(resPut.body).toHaveProperty("name");
    expect(resPut.body).toHaveProperty("category");
    expect(resPut.body).toHaveProperty("description");
    expect(resPut.body).toHaveProperty("individual_price");
    expect(resPut.body).toHaveProperty("quantity");
    expect(resPut.body).toHaveProperty("brand");
    expect(resPut.body).toHaveProperty("created_at");
    expect(resPut.body).toHaveProperty("updated_at");
    expect(resPut.body.name).not.toBe(oldName);
    expect(resPut.body.name).toBe(newName);

    // ...
  });

  afterAll(async (done) => {
    await sequelize.close();
    done();
  });
});