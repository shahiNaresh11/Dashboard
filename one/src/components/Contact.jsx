import './contact.css'

export default function Contact() {
  const data = [
    {
      id: 1,
      name: "Hari",
      detail: "Kapam"
    },
  
  ];

  const dataList = () => {
    return data.map((item, idx) => {
      return (
        <div className="card responsive"  key={item.id}>
          <img src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="  className="card-img-top img" alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.detail}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="container ">
        {dataList()}
      </div>
    </>
  );
}
