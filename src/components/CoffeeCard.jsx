import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, details, photoUrl } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                              });
                              const remaining = coffees.filter(cof => cof._id !== _id);
                              setCoffees(remaining)
                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-[#F4F3F0]">
            <figure>
                <img
                    src={photoUrl} />
            </figure>
            <div className="flex justify-between items-center w-full pr-4">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-3">
                        <button className="btn join-item text-2xl bg-[#D2B48C]"><FaEye></FaEye></button>
                        <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item text-2xl"><FaPen></FaPen></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)}
                            className="btn join-item text-2xl bg-[#EA4744]"><MdDelete></MdDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;