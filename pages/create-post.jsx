import Link from 'next/link'
export default function CreatePost() {
  return (
    <div className="h-screens bg-white flex flex-col space-y-10 justify-center items-center">
      <div className="flex container">
        <div className="bg-white md:w-12/12 xl:w-8/12 lg:w-9/12 w-full xl:ml-6 lg:mr-6    shadow-xl rounded p-5">
          <h1 className="text-3xl font-medium">Create Post</h1>
          <p className="text-sm text-red-500"> Error </p>
          <form className="space-y-5 mt-5">
            <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="Title" />
            <input type="text" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="slug" />

            <textarea name="body" className="w-full h-full border border-gray-800 rounded px-3" id="body" cols="30" rows="10" placeholder="Body"></textarea>

            <input type="file" className="w-full h-12 border border-gray-800 rounded px-3" placeholder="image" />
            <select name="isPublished" id="">
              <option value={true}> Publish </option>
              <option value={false}> No Publish </option>
            </select>
            <button
              type="submit"
              className="text-center w-full bg-green-900 rounded-md text-white py-3 font-medium">
              <i className="fas fa-plus"></i>
              Create
            </button>
          </form>
        </div>
        <div className="bg-gray  md:w-12/12 w-full shadow-xl rounded p-5">
          <img src="https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_auto/c_limit,dpr_3.0,g_center,w_300/v1/academind.com/content/courses/javascript-tricky-parts/javascript-course-the-tricky-parts" alt="" />
        </div>
      </div>

    </div>
  );
}