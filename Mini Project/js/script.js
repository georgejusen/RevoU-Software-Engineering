function validateForm() {
            // Mendapatkan nilai input dari elemen dengan id "fullname"
            let nama = document.getElementById("fullname").value;
            
            // Mendapatkan nilai input dari elemen dengan id "email"
            let email = document.getElementById("email").value;
            
            // Mendapatkan nilai input dari elemen dengan id "option"
            let option = document.getElementById("option").value;

            // Validasi nama
            if (nama === "") {
                alert("Nama harus diisi");
                return false;
            }

            // Validasi email
            if (email === "") {
                alert("Email harus diisi");
                return false;
            } else {
                // Menggunakan regular expression untuk memeriksa format email yang valid
                let emailRegex = /^\S+@\S+\.\S+$/;
                if (!emailRegex.test(email)) {
                    alert("Email tidak valid");
                    return false;
                }
            }

            // Validasi option
            if (option === "") {
                alert("Harap pilih opsi");
                return false;
            }

            // Jika semua validasi berhasil, formulir dianggap valid
            alert("Formulir valid!");
            return true;
        }