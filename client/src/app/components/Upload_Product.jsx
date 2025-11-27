import React, { useState } from 'react'
import { uploadIcon } from '../../assets/assets'

const Upload_Product = ({ productData, setProductData }) => {

    const uploadProductImageData = [
        { id: "image1" , title: "Product Image" },
        { id: "image2" , title: "Related Image" },
        { id: "image3" , title: "Related Image" },
        { id: "image4" , title: "Related Image" },
    ]

    const onChange = (e) => {
        const id = e.target.id;
        const file = e.target.files[0];
        setProductData(prev => ({ ...prev, [id]: file }));
    }

    return (
        <div className={`w-full`}>
            <strong>Upload Product Image</strong>

            <div className='flex flex-wrap gap-5 mt-10'>
                {
                    uploadProductImageData.map((img, index) => {
                        const file = productData[img?.id];

                        const preview = !file ? uploadIcon : URL.createObjectURL(file);
                        return (
                            <figure key={index}>
                                <figcaption className='text-xs truncate text-gray-500 mb-2'>{img.title}</figcaption>
                                <label htmlFor={img.id}>
                                    <img src={preview} alt={img.id} className='max-w-24' />
                                </label>
                                <input onChange={onChange} id={img.id} type="file" hidden />
                            </figure>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Upload_Product