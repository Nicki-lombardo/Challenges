function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src="ruta_del_avatar.jpg" alt="Avatar" />
    </button>
  );
}

export default Avatar;
