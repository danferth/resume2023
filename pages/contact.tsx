import Layout from "../components/Layout";
import Input from "../components/input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
const Contact = () => {
  // Formspree endpoint:
  // https://formspree.io/f/xrgvglyd

  return (
    <Layout title="Contact">
      <div className="text-center">
        <h1 className="text-2xl text-stone-700 font-black mb-8">
          Want to start a conversation?
        </h1>
        <div className="">
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Who you?"
            label="What's your name?"
          />
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            label="What's your email?"
          />
          <TextArea
            id="message"
            label="What's on your mind?"
            name="message"
            placeholder="How's it going...."
          />
          <div className="mt-4 mb-8 xl:mt-12">
            <Button onClick={() => console.log("submitted")}>
              Start Conversation
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
