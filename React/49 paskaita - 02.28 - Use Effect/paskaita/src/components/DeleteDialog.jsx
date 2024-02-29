const DeleteDialog = ({deleteDish, id, open, closeDialog}) => {
  return (
    <dialog open>
      <h1>Ar tikrai norite istrinti si patiekala?</h1>
      <button
        onClick={() => {
          deleteDish(id);
          closeDialog();
        }}
      ></button>
    </dialog>
  );
}
 
export default DeleteDialog;