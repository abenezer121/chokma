import React from 'react'
import bookcover from "./../assets/bookcover.jpg"

const BookDescription = (props) => {

    return (
        <div className='w-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 '>
                <div className='items-center mt-10'>
                    <img src={bookcover} alt=""  className='' />
                </div>
                <div className='mt-10 text-left mx-10'>
                    <h1 className='font-bold text-3xl'>12 Ways Your Phone Is Changing You</h1>
                    <p>by <span className='text-gray-500 underline'>Tony Reinke</span></p>
                    <p className='mt-10 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis placeat ex, earum, vitae repellat animi tenetur voluptates nobis
                        vel rem nisi minus velit nemo sint nam repellendus similique deserunt corporis,
                        unde ab voluptatem quas! Consequuntur quisquam sit quas? Earum, quo!</p>
                    <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas expedita pariatur magnam deleniti non officia tempore
                        dolorem fugit nam! Temporibus maxime aperiam ipsa et sint ratione
                        harum vel, delectus veniam! Perferendis, laudantium. Aliquid laborum quam
                        animi hic praesentium vero doloribus nesciunt nam corrupti eum esse dolorum
                        quos, possimus dolorem accusantium nemo commodi? Eligendi aut veniam sit maiores
                        praesentium! Ut tenetur iure adipisci corporis sequi possimus minus fuga quisquam
                        suscipit fugit saepe ea eligendi exercitationem laborum voluptas, beatae dicta, vero optio.
                        Repudiandae officia excepturi tempore eos est nobis deleniti aliquam molestiae omnis
                        ab aspernatur quis maiores molestias illum vitae culpa voluptates expedita suscipit incidunt
                        quo laboriosam atque, nemo quidem! Perferendis ullam veritatis quam minus natus tenetur
                        voluptatum sapiente consectetur, velit veniam!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Quidem amet laborum quis molestiae optio nostrum, cumque nam
                        earum voluptatibus magni, mollitia voluptatem voluptates vero
                        delectus ratione fugit necessitatibus. Totam quasi eaque obcaecati
                        quisquam atque praesentium voluptatem voluptate exercitationem,
                        reiciendis, culpa deserunt fuga aut dolore ipsum dolorum perferendis
                        quas a accusantium soluta dignissimos cum nesciunt provident similique
                        nisi! Aliquam, at laborum?</p>
                    
                </div>
            </div>
        </div>
    )
}

export default BookDescription