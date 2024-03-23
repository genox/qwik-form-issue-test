import { component$ } from "@builder.io/qwik";
import { NavLink } from "~/components/ui/navLink";

export default component$(() => {
    return (
        <div class={'prose max-w-2xl pt-8 pl-8'}>
            <h1>Index</h1>
            <p>Welcome to the index page</p>
            <hr />
            <p><NavLink type={'btn-neutral'} href={'/de/user/signin'}>See translated vanilla form</NavLink></p>
            <p>This example shows the german translation. Click on "Anmelden" and notice the translation switching back to english.</p>
            <hr />
            <p><NavLink type={'btn-neutral'} href={'/de/user/signup'}>See translated modular-forms form</NavLink></p>
            <p>This example shows the german translation. Click on "Anmelden" and notice the translation switching back to english.</p>
        </div>
    );
})