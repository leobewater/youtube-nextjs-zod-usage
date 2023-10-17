const CheckoutForm = () => {
  return (
    <form className="flex flex-col space-y-4 border p-4 shadow-lg bg-white w-full max-w-md">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="State" />
      <input type="text" placeholder="Zip" />
      <input type="checkbox" name="" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CheckoutForm;
