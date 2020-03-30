import React from 'react';

const EditModal = () => {


    return (
        <>
            <div class="container">
                <h1>Modal Animations</h1>
                <ul class="buttons">
                    <li><button data-modal="modal-zoom-in">Zoom In</button></li>

                </ul>
            </div>

            <div class="modal-background"></div>

            <div id="modal-zoom-in" class="modal">
                <h2>Login</h2>
                <form action="#">
                    <label>
                        Username:
      <input type="text" name="username" value="" />
                    </label>
                    <label>
                        Password:
      <input type="password" name="password" value="" />
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}

export default EditModal