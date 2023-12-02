import React, { useEffect, useState } from 'react'
import ProductData from "./ProductData.json"
import "./ProductPage.css"
import CustomModal from "./Modal"

const ProductPage = () => {
    const [data, setProductData] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    // console.log(ProductData)
    useEffect(() => {
        setProductData(ProductData)
    }, [])

    const openModal = (item) => {
        setModalOpen(true);
        console.log(item, "elel")
    };

    const closeModal = (el) => {
        setModalOpen(false);

    };

    console.log(data, "da")
    return (
        <div>


            <table className="data-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Edit</th>
                        {/* Add more table headers based on your API data */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>

                            <div className="product-info">
                                <img src={item.image} alt={item.title} className="product-image" />
                                <div className="product-details">
                                    <h4>{item.title}</h4>
                                </div>
                            </div>
                            <td>{item.brand}</td>
                            <td>{item.price}</td>
                            <td>{item.qantity}</td>
                            <td>{item.total}</td>
                            <td>{item.status === 1 ? "✔" : "✗"}</td>
                            <td><button onClick={(item) => openModal(item)}>Edit</button></td>
                            <div>

                                <CustomModal isOpen={isModalOpen} onClose={closeModal}>
                                    <div>
                                        {data.map((el) => (
                                            <div> <h4>{item.title}</h4></div>

                                        ))}
                                    </div>
                                </CustomModal>
                            </div>
                            {/* Add more table cells based on your API data */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductPage