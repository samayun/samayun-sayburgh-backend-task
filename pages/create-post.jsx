import { useRouter } from 'next/router'
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ShowError from "../components/ShowError";
// import { createPostAction } from "../store/actions/post.action";
import { useMutation } from "@apollo/client";
import { initializeApollo } from '../lib/apollo';
import QUERY_CREATE_POST from '../lib/queries/createNewPost.graphql';
import Loading from '../components/Loading';

export function getStaticProps() {
  return {
    props: { title: "Create A New Post" },
  };
}

export default function CreatePost() {
  const router = useRouter()
  const [CREATE_POST] = useMutation(QUERY_CREATE_POST);
  const [image, setImage] = useState();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async credentials => {
    const variables = {
      ...credentials,
      image,
      isPublished: Boolean(credentials.isPublished)
    }
    // CREATE_POST({ variables });
    const { data, loading, error } = await CREATE_POST({ variables });
    // // make sure all data is loaded
    if (loading) {
      return <Loading />
    }
    if (error) {
      console.log(`error `, error);
      setError(error);
    }
    if (data?.createPost) {
      // mutate posts state & push this on that array : data.createPost
      router.push('/');
    }
  }
  const _handleReaderLoaded = (readerEvt) => {
    let binaryString = readerEvt.target.result;
    let base64String = btoa(binaryString);
    base64String = `data:image/png;base64,${base64String}`;
    setImage(base64String);
  };
  const handleImage = (e) => {
    let file = e.target.files[0];
    let fileIsImage = file.type.includes("image/");

    file.type.split("/") === "" && setImage(file);
    let extension = /(png|gif|jpg|jpeg|webp)/i.test(file.type.split("/")[1]);
    if (!fileIsImage || !extension) {
      alert("File Format Is Invalid . Please Upload in image");
      setImage(undefined);
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = _handleReaderLoaded;
      reader.readAsBinaryString(file);
      console.log(reader);
    }
  };
  return (
    <div className="w-screenX bg-white flex flex-col0 justify-center items-center">
      <div className="sm:flex-auto md:flex container">
        {/* xl:w-8/12 lg:w-9/12 w-full xl:ml-6 lg:mr-6 */}
        <div className="bg-white sm:order-last md:order-first  w-12/12 w-full md:w-8/12  shadow-xl rounded p-5">
          {error && <ShowError title="Unable to create post .send valid credentials" semiTitle="Failed to create Post" />}
          <h1 className="text-3xl font-medium">Create Post</h1>
          {errors.title && <ShowError title="title is required" />}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-5">
            <input
              type="text"
              {...register("title", { required: true })}
              className="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="Title"
            />
            {errors.slug && <ShowError title={"slug is required"} />}
            <input
              type="text"
              {...register("slug", { required: true })}
              className="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="slug"
            />
            {errors.body && <ShowError title={"body is required"} />}
            <textarea
              {...register("body", { required: true })}
              name="body"
              className="w-full h-full border border-gray-800 rounded px-3"
              id="body"
              cols="30"
              rows="10"
              placeholder="Body"
            ></textarea>
            {errors.image && <ShowError title={"image is required"} />}
            <input
              type="file"
              {...register("image", { required: true })}
              onChange={handleImage}
              className="w-full h-12 border border-gray-800 rounded px-3"
              placeholder="image"
            />
            {errors.tags && <ShowError title={"tags is required"} />}
            <input
              type="text"
              {...register("tags", { required: false })}
              className="w-full h-12 border border-gray-800 rounded px-3"
              placeholder={errors.tags ? 'tags is required' : 'Enter  tags'} />

            {errors.isPublished && <ShowError title={"isPublished is required"} />}
            <select name="isPublished" {...register("isPublished", { type: Boolean, required: true })}>
              <option value={true}> Publish </option>
              <option value={false}> No Publish </option>
            </select>

            <button
              type="submit"
              className="text-center w-full bg-green-900 rounded-md text-white py-3 font-medium"
            >
              <i className="fas fa-plus"></i>
              Create
            </button>
          </form>
        </div>
        <div className="bg-gray sm:order-first md:order-last w-12/12 w-full md:w-4/12  shadow-xl rounded p-5">
          <img src={image} className="w-full" />
        </div>
      </div>
    </div>
  );
}
