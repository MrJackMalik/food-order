import axios from "axios";
import { useEffect, useState } from "react";
import { EditCard } from "../../components/EditCard/EdirCard";
import { Modal } from "../../components/Modal/Modal";
export const Settings = () => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { name, price, bowls, category_id, food_img } = evt.target.elements;
    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("bowls", bowls.value);
    formData.append("category_id", category_id.value);
    formData.append("food_img", food_img.files[0]);

    axios
      .post("https://food-service-layer-app.herokuapp.com/food", formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("https://food-service-layer-app.herokuapp.com/food/5")
      .then((res) => setDishes(res.data))
      .catch((err) => console.log(err));
  });
  const [dishes, setDishes] = useState("");
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleFormEdit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    const { name, price, bowls, category_id, food_img } = evt.target.elements;
    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("bowls", bowls.value);
    formData.append("category_id", category_id.value);
    formData.append("food_img", food_img.files[0]);

    axios
      .put(
        "https://food-service-layer-app.herokuapp.com/food/" + selected.id,
        formData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const handleDeleteFood = () => {
    axios
      .delete(
        "https://food-service-layer-app.herokuapp.com/food/" + selected.id
      )
      .then((res) => {
        if (res.data) {
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form w-50 mx-auto my-4">
        <input
          className="form-control mb-3"
          type="text"
          name="name"
          required
          id=""
        />
        <input
          className="form-control mb-3"
          type="text"
          name="price"
          required
          id=""
        />
        <input
          className="form-control mb-3"
          type="number"
          name="bowls"
          id=""
          required
        />
        <input
          className="form-control mb-3"
          type="number"
          name="category_id"
          id=""
          required
        />
        <input
          className="form-control mb-3"
          type="file"
          name="food_img"
          id=""
          required
        />
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
      <div className="container overflow-hidden my-5">
      {dishes.length && (
        <ul className="row gx-3 gy-5">
          {dishes.map((e) => (
            <EditCard
              key={e.id}
              item={e}
              setModal={setModal}
              setSelected={setSelected}
            />
          ))}
        </ul>
      )}
      </div>
     

      <Modal setModal={setModal} modal={modal}>
        <form onSubmit={handleFormEdit} className="form w-50 mx-auto my-4">
          <input
            className="form-control mb-3"
            type="text"
            name="name"
            id=""
            defaultValue={selected.name}
          />
          <input
            className="form-control mb-3"
            type="text"
            name="price"
            id=""
            defaultValue={selected.price}
          />
          <input
            className="form-control mb-3"
            type="number"
            name="bowls"
            id=""
            defaultValue={selected.bowls}
          />
          <input
            className="form-control mb-3"
            type="number"
            name="category_id"
            id=""
          />
          <img
            src={
              "https://food-service-layer-app.herokuapp.com/" + selected.image
            }
            alt=""
            width="150"
            height="150"
          />
          <input
            className="form-control mb-3"
            type="file"
            name="food_img"
            id=""
          />
          <button type="submit">Edit</button>
          <button
            onClick={handleDeleteFood}
            type="submit"
            className="btn btn-danger"
          >
            Delete
          </button>
        </form>
      </Modal>
    </div>
  );
};
