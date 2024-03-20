import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Mayby some text?');

export default function SearchBar() {
    return (
<header>
  <form>
    <input
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
    <button type="submit" onClick={notify}>Search</button>
  </form>
</header>

    )
}