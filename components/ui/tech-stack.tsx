const techstackbtn = ({ name, icon }: { name: string; icon: string }) => {
    return (
      <div className="flex items-center gap-2 justify-center bg-[#2e2e2e] px-3 text-sm font-medium py-0.5 w-fit rounded-full mb-1">
        <div className={`h-2 w-2 rounded-full ${icon}`}></div>
  
        <div>{name}</div>
      </div>
    );
  };
  
  export default techstackbtn;