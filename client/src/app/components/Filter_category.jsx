import React from 'react'

const Filter_category = () => {
    const checkbox = [
        { name: 'Men-shirt' },
        { name: 'Men-pant' },
        { name: 'kids' },
        { name: 'Women-shirt' },
        { name: 'Women-Pant' },
    ]

    return (
        <div>
            <div>
                <h1 className='text-2xl hidden md:flex'>Products For You</h1>

                <div>
                    {
                        checkbox.map((item, index) => (
                            <div key={index}>
                                <input type="checkbox" name={item.name} />
                                <label htmlFor={item.name}>{item.name}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Filter_category