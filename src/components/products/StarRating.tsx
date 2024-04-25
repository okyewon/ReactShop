const StarRating = (rate) => {
  const real = Math.round(rate.rate % 1);
  let integer = Math.trunc(rate.rate) * 2 + real;

  let arr = new Array(10).fill(0);
  return (
    <div className="rating rating-half">
      {arr.map((_, idx) => (
        <input
          key={`star${idx}`}
          type="radio"
          name="rating-10"
          checked={idx < integer ? true : false}
          className={`bg-yellow-400 cursor-default mask mask-star-2 ${!(idx % 2) ? "mask-half-1" : "mask-half-2"}`}
          readOnly
        />
      ))}
    </div>
  );
};

export default StarRating;
