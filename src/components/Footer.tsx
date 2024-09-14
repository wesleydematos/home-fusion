export default function Footer() {
  return (
    <footer className="mb-5 mt-10 px-[5vw] flex justify-between text-base font-normal leading-6">
      <p>© 2024 CodeLabs USA. Todos os direitos reservados.</p>
      <div className="flex gap-3">
        <p className="cursor-pointer">Termos de uso</p>
        <p className="cursor-pointer">Privacidade</p>
        <p className="cursor-pointer">Ajuda</p>
      </div>
    </footer>
  );
}
