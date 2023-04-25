const Shimmer = () => {
    return (
      <div className="flex flex-wrap ">
        {Array(10)
          .fill("")
          .map((e,index) => (
            <div  key={index}  className=" w-52 h-52 p-2 m-2 bg-slate-400"></div>
          ))}
      </div>
    );
  };
  export default Shimmer;