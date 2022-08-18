export const PopOut = () => {
  return (
    <form className="form">
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
      <input
        className="form-control w-50"
        type="text"
        name=""
        id=""
        placeholder="02/2022"
      />
      <input
        className="form-control w-50"
        type="password"
        name=""
        id=""
        placeholder="123"
      />
      <label htmlFor="">Order Type</label>
      <select name="" id=""></select>
      <label htmlFor="">Table no</label>
      <input type="number" className="form-control" placeholder="140" />
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
