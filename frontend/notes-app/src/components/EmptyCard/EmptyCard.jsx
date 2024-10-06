import PropTypes from "prop-types";

export const EmptyCard = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <img src={"../../../public/add-notes.jpg"} alt="No Notes" className="w-60" />

      <p className="w-1/2 text-sm font-medium text-slate-700 text-center leading-7 mt-5">
        {message}
      </p>
    </div>
  );
};

EmptyCard.propTypes = {
  message: PropTypes.string.isRequired,
};
