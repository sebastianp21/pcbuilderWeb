import "./Cpu.css";
import Waybar from "../../components/Waybar";
import Specsbar from "../../components/Specsbar";
import { useEffect, useState } from "react";

function Cpu() {
  const [cpus, setCpus] = useState([]);
  const [cart, setCart] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("cart") || "[]");
      if (!Array.isArray(raw)) return [];
      return raw;
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    fetch("/api/cpu")
      .then((res) => res.json())
      .then((data) => setCpus(data));
  }, []);

  function addToCart(cpu) {
    const id = cpu?.opendb_id ?? cpu?.metadata?.id ?? cpu?.id ?? null;
    const name = cpu?.metadata?.name ?? cpu?.name ?? "Unknown CPU";
    if (!id) {
      console.error("CPU has no id, cannot add to cart", cpu);
      return;
    }

    // look for existing CPU with same id
    const existingIndex = cart.findIndex((item) => item.id === id);
    let newCart;

    if (existingIndex >= 0) {
      // bump quantity and ensure type is set
      newCart = cart.map((item, i) =>
        i === existingIndex
          ? { ...item, qty: (item.qty || 1) + 1, type: "cpu" }
          : item
      );
    } else {
      // NEW cart item – tag as cpu
      newCart = [...cart, { id, name, qty: 1, type: "cpu" }];
    }

    setCart(newCart);
    try {
      localStorage.setItem("cart", JSON.stringify(newCart));
    } catch (e) {
      console.error("Could not save cart to localStorage", e);
    }
    console.log("Added to cart:", { id, name, type: "cpu" });
  }

  return (
    <>
      <Waybar />
      <div className="land_p">
        <div className="land_p_title">
          <h1 className="p_title">CPUs</h1>
        </div>

        <div className="cpu_products">
          {cpus.map((cpu, index) => {
            const keyId =
              cpu?.opendb_id ?? cpu?.metadata?.id ?? cpu?.id ?? index;
            return (
              <div className="cpu_item_row" key={keyId}>
                <div className="cpu_item_specs">{cpu.metadata.name}</div>
                <div className="cpu_item_specs">{cpu.cores.total}</div>
                <div className="cpu_item_specs">
                  {cpu.clocks.performance.base}
                </div>
                <div className="cpu_item_specs">
                  {cpu.clocks.performance.boost}
                </div>
                <div className="cpu_item_specs">{cpu.microarchitecture}</div>
                <div className="cpu_item_specs">{cpu.tdp}</div>
                <div className="cpu_item_specs">
                  <button type="button" onClick={() => addToCart(cpu)}>
                    🛒 Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cpu;
