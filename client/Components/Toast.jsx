function Toast({ message }) {
  return (
    <div>
      <ToastContainer>{toast("message")}</ToastContainer>
    </div>
  );
}

export default Toast;
