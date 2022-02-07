import Swal from "sweetalert2";

export function errorMessage(message){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message
  });
}
export function successMessage(message){
  Swal.fire({
    icon: 'success',
    title: 'Eba...',
    text: message
  });
}
