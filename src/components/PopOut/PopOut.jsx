export const PopOut = () => {
  return (
    <form className="form w-50">
      <label htmlFor="">CardHolder Name</label>
      <input
        className="form-control"
        type="text"
        name=""
        id=""
        placeholder="Levi Ackerman"
      />
      <label htmlFor="">Card Number</label>
      <input
        className="form-control"
        type="text"
        name=""
        id=""
        placeholder="2564 1421 0897 1244"
      />

      <div className="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <label htmlFor="">Expiration date</label>
            <input
              type="year"
              class="form-control"
              id="floatingInputGrid"
              placeholder="02/2022"
              value="mdo@example.com"
            />
            <label for="floatingInputGrid">Email address</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <label htmlFor="">CVV</label>
            <input
              type="password"
              class="form-control"
              id="floatingInputGrid"
              placeholder=""
              value="sdsd"
              max="3"
            />
            <label for="floatingInputGrid">Email address</label>
          </div>
        </div>
      </div>
      <div class="row g-2">
        <div class="col-md">
          <div class="form-floating">
            <select
              class="form-select"
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option selected>DineIn</option>
              <option value="1">To go</option>
              <option value="2">Delievery</option>
            </select>
            <label for="floatingSelectGrid">Works with selects</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value="mdo@example.com"
            />
            <label for="floatingInputGrid">Email address</label>
          </div>
        </div>
      </div>
      <button
        onClick={() => {}}
        className="btn btn-outlined w-50"
        type="submit"
      >
        Cancel
      </button>
      <button onClick={() => {}} className="btn btn-private w-50" type="submit">
        Confirm Payment
      </button>
    </form>
  );
};
