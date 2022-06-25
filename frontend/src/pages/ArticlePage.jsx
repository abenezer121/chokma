import React , {useEffect} from "react"
import professional from "./../assets/professional.jpg"

const ArticlePage = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="w-full  ">
            <div className="w-full py-20 bg-black flex items-center text-center">
                <h2 className="text-white text-6xl m-auto font-bold">Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
            <div className="flex flex-col mx-[20%] mt-10">
                <div className="flex">
                    <img src={professional} alt="" className="w-10 h-10 rounded-full" />
                    <div className="flex items-center mx-3">
                        <p>Article by <span>Lorem, ipsum.</span></p>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-left text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ut veritatis. Ipsum, molestias quaerat delectus iste laborum nisi iusto illum nulla molestiae omnis vero fuga maxime velit consequuntur dolores fugit animi explicabo! Culpa autem, sed aliquam accusantium fuga impedit dolores saepe consequuntur laborum fugiat delectus libero esse aliquid commodi id explicabo ab. Cum numquam tenetur dignissimos natus mollitia possimus, neque culpa, quibusdam eum dolores ab reprehenderit quas! Sequi ex quia facere aspernatur in maxime, ad vitae hic suscipit ullam temporibus autem, at placeat. Aliquam quas saepe officiis doloremque? Animi molestiae aliquid ut dicta ratione eum maxime eveniet ad veniam neque commodi enim repudiandae itaque possimus, qui placeat cum vero explicabo eaque doloribus accusamus perspiciatis eos. Veritatis repellat magni minus vero odit et possimus eaque consectetur doloribus, ullam, sit inventore iste laudantium assumenda numquam accusantium excepturi obcaecati omnis consequuntur dignissimos, asperiores ea adipisci. Nulla numquam ratione iste provident non optio architecto veritatis, neque perferendis vel quia ipsa asperiores blanditiis nemo ipsam, aut, quibusdam possimus? Alias magnam iusto natus nam deserunt perspiciatis earum omnis ad officia, nobis quae? Aliquid ex commodi obcaecati similique, maxime nobis id repellendus consequuntur repudiandae enim ab nostrum corrupti natus facere adipisci quasi dolorum distinctio harum molestias! Saepe?
                    </p>
                </div>
            </div>
            
        </div>
    );
}
export default ArticlePage;