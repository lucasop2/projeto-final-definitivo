import React, { useEffect } from "react";
import "../Principal/Style.css";
export default function Calculadora() {

    function DeselecionarRadios() {
        var radios = document.querySelectorAll('input[type="radio"]');
        for (var i = 0; i < radios.length; i++) {
          radios[i].checked = false;
        }
      }

  useEffect(() => {
    function LimparDados() {
      var inputs = document.getElementsByTagName("input");

      for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (
          input.type === "text" ||
          input.type === "password" ||
          input.type === "number"
        ) {
          input.value = "";
        } else if (input.type === "checkbox" || input.type === "radio") {
          input.checked = false;
        }
      }
    }

    function LimparResultados() {
      document.getElementById("ia").innerText = "0";
      document.getElementById("ib").innerText = "0";
      document.getElementById("ic").innerText = "0";
      document.getElementById("iap").innerText = "0";
      document.getElementById("ibp").innerText = "0";
      document.getElementById("icp").innerText = "0";
      document.getElementById("linhaa").innerText = "0";
      document.getElementById("linhab").innerText = "0";
      document.getElementById("linhac").innerText = "0";
      document.getElementById("linhaap").innerText = "0";
      document.getElementById("linhabp").innerText = "0";
      document.getElementById("linhacp").innerText = "0";
      document.getElementById("fasea").innerText = "0";
      document.getElementById("faseb").innerText = "0";
      document.getElementById("fasec").innerText = "0";
      document.getElementById("faseap").innerText = "0";
      document.getElementById("fasebp").innerText = "0";
      document.getElementById("fasecp").innerText = "0";
      document.getElementById("pofa").innerText = "0";
      document.getElementById("pofb").innerText = "0";
      document.getElementById("pofc").innerText = "0";
      document.getElementById("pofap").innerText = "0";
      document.getElementById("pofbp").innerText = "0";
      document.getElementById("pofcp").innerText = "0";
      document.getElementById("pofa2").innerText = "0";
      document.getElementById("pofb2").innerText = "0";
      document.getElementById("pofc2").innerText = "0";
      document.getElementById("pofap2").innerText = "0";
      document.getElementById("pofbp2").innerText = "0";
      document.getElementById("pofcp2").innerText = "0";
    }

    // Função para multiplicar dois números complexos
    function multiplicarComplexos(z1, z2) {
      const real = z1.real * z2.real - z1.imag * z2.imag;
      const imag = z1.real * z2.imag + z1.imag * z2.real;
      return { real, imag };
    }
    // Função para dividir dois números complexos
    function dividirComplexos(z1, z2) {
      const denominator = z2.real ** 2 + z2.imag ** 2;
      let real, imag;

      if (denominator !== 0) {
        real = (z1.real * z2.real + z1.imag * z2.imag) / denominator;
        imag = (z1.imag * z2.real - z1.real * z2.imag) / denominator;
      } else {
        // Tratamento especial caso o denominador seja zero
        real = 0;
        imag = 0;
      }

      return { real, imag };
    }

    function converterPolarParaRetangular(magnitude, angle) {
      const real = magnitude * Math.cos((angle * Math.PI) / 180);
      const imag = magnitude * Math.sin((angle * Math.PI) / 180);
      return { real, imag };
    }

    // Função para converter de forma retangular para forma polar
    function converterRetangularParaPolar(real, imag) {
      const magnitude = Math.sqrt(real * real + imag * imag);
      const angle = (Math.atan2(imag, real) * 180) / Math.PI;
      return { magnitude, angle };
    }

    function somarComplexos(z1, z2) {
      return {
        real: z1.real + z2.real,
        imag: z1.imag + z2.imag,
      };
    }

    function somarComplexos2(z1, z2, z3) {
      return {
        real: z1.real + z2.real + z3.real,
        imag: z1.imag + z2.imag + z3.imag,
      };
    }

    function subtrairComplexos(z1, z2) {
      return {
        real: z1.real - z2.real,
        imag: z1.imag - z2.imag,
      };
    }

    function deslocamentopositivo(real, imag) {
      const a = converterRetangularParaPolar(real, imag);
      const des = 120 + a.angle;
      const pol = converterPolarParaRetangular(a.magnitude, des.angle);

      return { real: pol.real, imag: pol.imag };
    }
    function deslocamentonegativo(real, imag) {
      const a = converterRetangularParaPolar(real, imag);
      const des = a.angle - 120;
      const pol = converterPolarParaRetangular(a.magnitude, des);

      return { real: pol.real, imag: pol.imag };
    }

    function inv(real, imag) {
      const a = converterRetangularParaPolar(real, imag);
      const invertedAngle = 0 - a.angle;
      const za = converterPolarParaRetangular(a.magnitude, invertedAngle);
      return { real: za.real, imag: za.imag };
    }

    function VAB(real, imag) {
      const a = converterRetangularParaPolar(real, imag);
      const raizDeTres = Math.sqrt(3);
      const parteRealDividida = a.magnitude * raizDeTres;
      const parteImaginariaDividida = a.angle - 30;

      return { real: parteRealDividida, imag: parteImaginariaDividida };
    }

    function caso1() {
      const zalinhai1 = parseFloat(document.getElementById("zalinai").value);
      const zalinha1 = parseFloat(document.getElementById("zalinha").value);
      const zblinhai1 = parseFloat(document.getElementById("zblinhai").value);
      const zblinha1 = parseFloat(document.getElementById("zblinha").value);
      const zclinhai1 = parseFloat(document.getElementById("zclinhai").value);
      const zclinha1 = parseFloat(document.getElementById("zclinha").value);
      const zcarga1 = parseFloat(document.getElementById("zcarga").value);
      const zcargai1 = parseFloat(document.getElementById("zcargai").value);
      const vab1 = parseFloat(document.getElementById("vab").value);
      const vabi1 = parseFloat(document.getElementById("vabi").value);
      const aux = 0;
      const aux2 = somarComplexos({ real: 1, imag: 0 }, { real: 0, imag: 0 });

      let za = 0,
        zb = 0,
        zc = 0,
        zcarga = 0,
        vab = 0,
        vbc = 0,
        vca = 0,
        ia = 0,
        ib = 0,
        ic = 0;

      var fase = document.getElementById("fase");
      var polar = document.getElementById("polar");
      var triangulo = document.getElementById("triangulo");
      var caso3 = document.getElementById("caso3");
      var caso1 = document.getElementById("caso1");
      var fonte = document.getElementById("fontepol");
      var VAB = document.getElementById("VAB");
      var caso2 = document.getElementById("caso2");

      if (fonte.checked) {
        vab = converterPolarParaRetangular(vab1, vabi1);
      } else {
        vab = somarComplexos(
          { real: vab1, imag: vabi1 },
          { real: aux, imag: aux }
        );
      }
      if (VAB.checked && fase.checked) {
        const a = converterRetangularParaPolar(vab.real, vab.imag);
        const raizDeTres = Math.sqrt(3);
        const parteReal = a.magnitude / raizDeTres;
        const parteImaginaria = a.angle + 30;
        vab = converterPolarParaRetangular(parteReal, parteImaginaria);
        const A = somarComplexos(
          { real: -0.5, imag: -0.866025 },
          { real: 0, imag: 0 }
        );
        vca = multiplicarComplexos(vab, A);
        vbc = dividirComplexos(vab, A);
      } else if (VAB.checked) {
        const a = converterRetangularParaPolar(vab.real, vab.imag);
        const raizDeTres = Math.sqrt(3);
        const parteReal = a.magnitude / raizDeTres;
        const parteImaginaria = a.angle - 30;
        vab = converterPolarParaRetangular(parteReal, parteImaginaria);
      } else if (fase.checked) {
        const A = somarComplexos(
          { real: -0.5, imag: -0.866025 },
          { real: 0, imag: 0 }
        );
        vca = multiplicarComplexos(vab, A);
        vbc = dividirComplexos(vab, A);
      }

      if (!fase.checked) {
        const A = somarComplexos(
          { real: -0.5, imag: -0.866025 },
          { real: 0, imag: 0 }
        );

        vbc = multiplicarComplexos(vab, A);
        vca = dividirComplexos(vab, A);
      }

      if (polar.checked) {
        za = converterPolarParaRetangular(zalinha1, zalinhai1);
        zb = converterPolarParaRetangular(zblinha1, zblinhai1);
        zc = converterPolarParaRetangular(zclinha1, zclinhai1);
        zcarga = converterPolarParaRetangular(zcarga1, zcargai1);
      } else {
        za = somarComplexos(
          { real: zalinha1, imag: zalinhai1 },
          { real: aux, imag: aux }
        );
        zb = somarComplexos(
          { real: zblinha1, imag: zblinhai1 },
          { real: aux, imag: aux }
        );
        zc = somarComplexos(
          { real: zclinha1, imag: zclinhai1 },
          { real: aux, imag: aux }
        );
        zcarga = somarComplexos(
          { real: zcarga1, imag: zcargai1 },
          { real: aux, imag: aux }
        );
      }

      if (triangulo.checked) {
        const den5 = multiplicarComplexos(za, zc);
        const den1 = multiplicarComplexos(za, zb);
        const den2 = multiplicarComplexos(zb, zc);
        const num = somarComplexos2(za, zb, zc);
        za = dividirComplexos(den5, num);
        zb = dividirComplexos(den1, num);
        zc = dividirComplexos(den2, num);
      }

      if (triangulo.checked) {
        caso3.checked = true;
      }

      za = somarComplexos(za, zcarga);
      zb = somarComplexos(zb, zcarga);
      zc = somarComplexos(zc, zcarga);

      if (caso3.checked) {
        const yat = dividirComplexos(aux2, za);
        const ybt = dividirComplexos(aux2, zb);
        const yct = dividirComplexos(aux2, zc);

        const yat2 = multiplicarComplexos(yat, vab);
        const ybt2 = multiplicarComplexos(ybt, vbc);
        const yct2 = multiplicarComplexos(yct, vca);

        const den = somarComplexos2(yat2, ybt2, yct2);
        const num = somarComplexos2(yat, ybt, yct);

        const vnn = dividirComplexos(den, num);

        const ia1 = dividirComplexos(vab, za);
        const ia2 = dividirComplexos(vnn, za);
        ia = subtrairComplexos(ia1, ia2);

        const ib1 = dividirComplexos(vbc, zb);
        const ib2 = dividirComplexos(vnn, zb);
        ib = subtrairComplexos(ib1, ib2);

        const ic1 = dividirComplexos(vca, zc);
        const ic2 = dividirComplexos(vnn, zc);
        ic = subtrairComplexos(ic1, ic2);
        const vnnret = converterRetangularParaPolar(vnn.real, vnn.imag);
      }

      if (caso1.checked) {
        ia = dividirComplexos(vab, za);
        ib = dividirComplexos(vbc, zb);
        ic = dividirComplexos(vca, zc);
      }

      if (caso2.checked) {
        const zn = parseFloat(document.getElementById("zn").value);
        const zni = parseFloat(document.getElementById("zni").value);

        const a = dividirComplexos(vab, za);
        const b = dividirComplexos(vbc, zb);
        const c = dividirComplexos(vca, zc);

        const num = somarComplexos2(a, b, c);

        const zna = dividirComplexos({ real: zn, imag: zni }, za);
        const znb = dividirComplexos({ real: zn, imag: zni }, zb);
        const znc = dividirComplexos({ real: zn, imag: zni }, zc);

        const soma = somarComplexos2(zna, znb, znc);
        const dem = somarComplexos(soma, aux2);
        const in1 = dividirComplexos(num, dem);
        console.log("inn= ", in1);
        const suba = multiplicarComplexos(zna, in1);
        const subb = multiplicarComplexos(znb, in1);
        const subc = multiplicarComplexos(znc, in1);

        ia = subtrairComplexos(a, suba);
        ib = subtrairComplexos(b, subb);
        ic = subtrairComplexos(c, subc);
      }

      const neutro = somarComplexos2(ia, ib, ic);
      //corente de linha
      const iab = somarComplexos(ia, ib);
      const ibc = somarComplexos(ib, ic);
      const ica = somarComplexos(ic, ia);

      const invrtA = inv(ia.real, ia.imag);
      const invrtB = inv(ib.real, ib.imag);
      const invrtC = inv(ic.real, ic.imag);
      //pottencia
      za = subtrairComplexos(za, zcarga);
      zb = subtrairComplexos(zb, zcarga);
      zc = subtrairComplexos(zc, zcarga);
      //potencia na carga
      const pota = multiplicarComplexos(multiplicarComplexos(invrtA, za), ia);
      const potb = multiplicarComplexos(multiplicarComplexos(invrtB, zb), ib);
      const potc = multiplicarComplexos(multiplicarComplexos(invrtC, zc), ic);

      //potencia da fonte
      const pota2 = multiplicarComplexos(vab, invrtA);
      const potb2 = multiplicarComplexos(vbc, invrtB);
      const potc2 = multiplicarComplexos(vca, invrtC);

      //tençao de fase
      const vcargaA = multiplicarComplexos(za, ia);
      const vcargab = multiplicarComplexos(zb, ib);
      const vcargac = multiplicarComplexos(zc, ic);

      //tençao de linha

      const VAN = subtrairComplexos(vcargaA, vcargab);
      const VBN = subtrairComplexos(vcargab, vcargac);
      const VCN = subtrairComplexos(vcargac, vcargaA);

      const iaret = converterRetangularParaPolar(ia.real, ia.imag);
      const ibret = converterRetangularParaPolar(ib.real, ib.imag);
      const icret = converterRetangularParaPolar(ic.real, ic.imag);
      const vanret = converterRetangularParaPolar(VAN.real, VAN.imag);
      const vbnret = converterRetangularParaPolar(VBN.real, VBN.imag);
      const vcnret = converterRetangularParaPolar(VCN.real, VCN.imag);
      const vcargaAret = converterRetangularParaPolar(
        vcargaA.real,
        vcargaA.imag
      );
      const vcargabret = converterRetangularParaPolar(
        vcargab.real,
        vcargab.imag
      );
      const vcargacret = converterRetangularParaPolar(
        vcargac.real,
        vcargac.imag
      );
      const neutroret = converterRetangularParaPolar(neutro.real, neutro.imag);
      const potaret = converterRetangularParaPolar(pota.real, pota.imag);
      const potbret = converterRetangularParaPolar(potb.real, potb.imag);
      const potcret = converterRetangularParaPolar(potc.real, potc.imag);
      const iabaret = converterRetangularParaPolar(iab.real, iab.imag);
      const ibcbret = converterRetangularParaPolar(ibc.real, ibc.imag);
      const icacret = converterRetangularParaPolar(ica.real, ica.imag);

      const pota2ret = converterRetangularParaPolar(pota2.real, pota2.imag);
      const potb2ret = converterRetangularParaPolar(potb2.real, potb2.imag);
      const potc2ret = converterRetangularParaPolar(potc2.real, potc2.imag);

      const zap = converterRetangularParaPolar(za.real, za.imag);
      const zbp = converterRetangularParaPolar(zb.real, zb.imag);
      const zcp = converterRetangularParaPolar(zc.real, zc.imag);

      document.getElementById("ia").innerText =
        "corrente a: " +
        iaret.magnitude.toFixed(3) +
        " <" +
        iaret.angle.toFixed(3);
      document.getElementById("ib").innerText =
        "corrente b: " +
        ibret.magnitude.toFixed(3) +
        " <" +
        ibret.angle.toFixed(3);
      document.getElementById("ic").innerText =
        "corrente c: " +
        icret.magnitude.toFixed(3) +
        " <" +
        icret.angle.toFixed(3);

      document.getElementById("iap").innerText =
        "corrente a: " + ia.real.toFixed(3) + "  j" + ia.imag.toFixed(3);
      document.getElementById("ibp").innerText =
        "corrente b: " + ib.real.toFixed(3) + "  j" + ib.imag.toFixed(3);
      document.getElementById("icp").innerText =
        "corrente c: " + ic.real.toFixed(3) + "  j" + ic.imag.toFixed(3);

      if (triangulo.checked) {
        document.getElementById("linhaa").innerText =
          "tensão de linha e de fase va: " +
          vanret.magnitude.toFixed(3) +
          " <" +
          vanret.angle.toFixed(3);
        document.getElementById("linhab").innerText =
          "tensão de linha e de fase vb: " +
          vbnret.magnitude.toFixed(3) +
          " <" +
          vbnret.angle.toFixed(3);
        document.getElementById("linhac").innerText =
          "tensão de linha e de fase vc: " +
          vcnret.magnitude.toFixed(3) +
          " <" +
          vcnret.angle.toFixed(3);

        document.getElementById("linhaap").innerText =
          "tensão de linha e de fase va: " +
          VAN.real.toFixed(3) +
          "  j" +
          VAN.imag.toFixed(3);
        document.getElementById("linhabp").innerText =
          "tensão de linha e de fase vb: " +
          VBN.real.toFixed(3) +
          "  j" +
          VBN.imag.toFixed(3);
        document.getElementById("linhacp").innerText =
          "tensao de linha e de fase vc: " +
          VCN.real.toFixed(3) +
          "  j" +
          VCN.imag.toFixed(3);

        document.getElementById("fasea").innerText =
          "za em estrela: " +
          zap.magnitude.toFixed(3) +
          " <" +
          zap.angle.toFixed(3);
        document.getElementById("faseb").innerText =
          "zb em estrela: " +
          zbp.magnitude.toFixed(3) +
          " <" +
          zbp.angle.toFixed(3);
        document.getElementById("fasec").innerText =
          "zc em estrela: " +
          zcp.magnitude.toFixed(3) +
          " <" +
          zcp.angle.toFixed(3);

        document.getElementById("faseap").innerText =
          "za em estrela: " + za.real.toFixed(3) + "  j" + za.imag.toFixed(3);
        document.getElementById("fasebp").innerText =
          "zb em estrela: " + zb.real.toFixed(3) + "  j" + zb.imag.toFixed(3);
        document.getElementById("fasecp").innerText =
          "zc em estrela: " + zc.real.toFixed(3) + "  j" + zc.imag.toFixed(3);
      } else {
        document.getElementById("linhaa").innerText =
          "tensão de linha vab: " +
          vanret.magnitude.toFixed(3) +
          " <" +
          vanret.angle.toFixed(3);
        document.getElementById("linhab").innerText =
          "tensão de linha vbc: " +
          vbnret.magnitude.toFixed(3) +
          " <" +
          vbnret.angle.toFixed(3);
        document.getElementById("linhac").innerText =
          "tensão de linha vca: " +
          vcnret.magnitude.toFixed(3) +
          " <" +
          vcnret.angle.toFixed(3);

        document.getElementById("linhaap").innerText =
          "tensão de linha vab: " +
          VAN.real.toFixed(3) +
          "  j" +
          VAN.imag.toFixed(3);
        document.getElementById("linhabp").innerText =
          "tensão de linha vbc: " +
          VBN.real.toFixed(3) +
          "  j" +
          VBN.imag.toFixed(3);
        document.getElementById("linhacp").innerText =
          "tensão de linha vca: " +
          VCN.real.toFixed(3) +
          "  j" +
          VCN.imag.toFixed(3);

        document.getElementById("fasea").innerText =
          "tensão de fase vab: " +
          vcargaAret.magnitude.toFixed(3) +
          " <" +
          vcargaAret.angle.toFixed(3);
        document.getElementById("faseb").innerText =
          "tensão de fase vbc: " +
          vcargabret.magnitude.toFixed(3) +
          " <" +
          vcargabret.angle.toFixed(3);
        document.getElementById("fasec").innerText =
          "tensão de fase vca: " +
          vcargacret.magnitude.toFixed(3) +
          " <" +
          vcargacret.angle.toFixed(3);

        document.getElementById("faseap").innerText =
          "tensão de fase va: " +
          vcargaA.real.toFixed(3) +
          "  j" +
          vcargaA.imag.toFixed(3);
        document.getElementById("fasebp").innerText =
          "tensão de fase vb: " +
          vcargab.real.toFixed(3) +
          "  j" +
          vcargab.imag.toFixed(3);
        document.getElementById("fasecp").innerText =
          "tensao de fase vc: " +
          vcargac.real.toFixed(3) +
          "  j" +
          vcargac.imag.toFixed(3);
      }
      document.getElementById("pofa").innerText =
        "potencia da carga A: " +
        potaret.magnitude.toFixed(3) +
        " <" +
        potaret.angle.toFixed(3);
      document.getElementById("pofb").innerText =
        "potencia da carga B: " +
        potbret.magnitude.toFixed(3) +
        " <" +
        potbret.angle.toFixed(3);
      document.getElementById("pofc").innerText =
        "potencia da carga C: " +
        potcret.magnitude.toFixed(3) +
        " <" +
        potcret.angle.toFixed(3);

      document.getElementById("pofap").innerText =
        "potencia da carga A: " +
        pota.real.toFixed(3) +
        " j" +
        pota.imag.toFixed(3);
      document.getElementById("pofbp").innerText =
        "potencia da carga B: " +
        potb.real.toFixed(3) +
        " j" +
        potb.imag.toFixed(3);
      document.getElementById("pofcp").innerText =
        "potencia da carga C: " +
        potc.real.toFixed(3) +
        " j" +
        potc.imag.toFixed(3);

      document.getElementById("pofa2").innerText =
        "potencia da fonte A: " +
        pota2ret.magnitude.toFixed(3) +
        " <" +
        pota2ret.angle.toFixed(3);
      document.getElementById("pofb2").innerText =
        "potencia da fonte B: " +
        potb2ret.magnitude.toFixed(3) +
        " <" +
        potb2ret.angle.toFixed(3);
      document.getElementById("pofc2").innerText =
        "potencia da fonte C: " +
        potc2ret.magnitude.toFixed(3) +
        " <" +
        potc2ret.angle.toFixed(3);

      document.getElementById("pofap2").innerText =
        "potencia da fonte A: " +
        pota2.real.toFixed(3) +
        " j" +
        pota2.imag.toFixed(3);
      document.getElementById("pofbp2").innerText =
        "potencia da fonte B: " +
        potb2.real.toFixed(3) +
        " j" +
        potb2.imag.toFixed(3);
      document.getElementById("pofcp2").innerText =
        "potencia da fonte C: " +
        potc2.real.toFixed(3) +
        " j" +
        potc2.imag.toFixed(3);

      console.log("neutro= ", neutroret);
    }
  }, []);

  return (
    <div>
      <body className="dark">
        <div className="index">
          <div className="box box1">
            <div className="entradas-dados">
              <div className="tabela-dados dados-reais">
                <h2 className="title">Valores Reais</h2>
                <input type="number" id="zalinha" placeholder="ZA" />
                <input type="number" id="zblinha" placeholder="ZB" />
                <input type="number" id="zclinha" placeholder="ZC" />
                <input type="number" id="zcarga" placeholder="LINHA" />
                <input type="number" id="zn" placeholder="ZN CASO 2" />
                <input type="number" id="vab" placeholder="VAN" />
              </div>
              <div className="tabela-dados dados-img">
                <h2 className="title">Valores Imaginários</h2>
                <input type="number" id="zalinai" placeholder="ZA" />
                <input type="number" id="zblinhai" placeholder="ZB" />
                <input type="number" id="zclinhai" placeholder="ZC" />
                <input type="number" id="zcargai" placeholder="LINHA" />
                <input type="number" id="zni" placeholder="ZN CASO 2" />
                <input type="number" id="vabi" placeholder="VAN" />
              </div>
            </div>
            <div className="entradas-opcoes">
              <div className="tabela-dados radios options">
                <div className="radio-item item">
                  <div className="checkbox">
                    <input
                      type="radio"
                      id="caso1"
                      name="customRadio"
                      className="custom-control-input"
                    />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio1">
                      CASO 1
                    </label>
                  </div>
                </div>
                <div className="radio-item item">
                  <div className="checkbox">
                    <input
                      type="radio"
                      id="caso2"
                      name="customRadio"
                      className="custom-control-input"
                    />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio2">
                      CASO 2
                    </label>
                  </div>
                </div>
                <div className="radio-item item">
                  <div className="checkbox">
                    <input
                      type="radio"
                      id="caso3"
                      name="customRadio"
                      className="custom-control-input"
                    />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio2">
                      CASO 3
                    </label>
                  </div>
                </div>

                <button className="btns" onclick="deselecionarRadios()">
                  Redefinir opção
                </button>
              </div>
              <div className=" options">
                <div className="item">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="fontepol"
                      name="fontepol"
                      value="fontepol"
                    />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio2">
                      FONTE POLAR
                    </label>
                  </div>
                </div>
                <div className="item">
                  <div className="checkbox">
                    <input type="checkbox" id="VAB" name="VAB" value="VAB" />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio2">
                      VAB
                    </label>
                  </div>
                </div>
                <div className="item">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="fase"
                      name="fase"
                      value="negativa"
                    />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio2">
                      SEQUÊNCIA DE FASE NEGATIVA
                    </label>
                  </div>
                </div>
              </div>
              <div className="fonte options line2">
                <div className="item">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="triangulo"
                      name="triangulo"
                      value="triangulo"
                    />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio2">
                      TRIÂNGULO
                    </label>
                  </div>
                </div>
                <div className="item">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id="polar"
                      name="polar"
                      value="polar"
                    />
                  </div>
                  <div className="label">
                    <label className="custom-control-label" for="customRadio2">
                      POLAR
                    </label>
                  </div>
                </div>
              </div>
              <div className="fonte options line2 linebtns">
                <button className="btns btns-calcula" onClick={caso1}>
                  CALCULAR
                </button>
                <button className="btns btns-calcula" onClick={LimparDados}>
                  LIMPAR DADOS
                </button>
                <button
                  className="btns btns-calcula"
                  onClick={LimparResultados}
                >
                  LIMPAR RESULTADOS
                </button>
              </div>
            </div>
          </div>
          <div className="box box2">
            <div className="resultados-polar resultados">
              <h2 className="title">Valores em polar</h2>
              <table className="tabela-respostas ">
                <thead>
                  <tr>
                    <th scope="col">A</th>
                    <th scope="col">B</th>
                    <th scope="col">C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="ia">0</td>
                    <td id="ib">0</td>
                    <td id="ic">0</td>
                  </tr>
                  <tr>
                    <td id="linhaa">0</td>
                    <td id="linhab">0</td>
                    <td id="linhac">0</td>
                  </tr>
                  <tr>
                    <td id="fasea">0</td>
                    <td id="faseb">0</td>
                    <td id="fasec">0</td>
                  </tr>
                  <tr>
                    <td id="pofa">0</td>
                    <td id="pofb">0</td>
                    <td id="pofc">0</td>
                  </tr>
                  <tr>
                    <td id="pofa2">0</td>
                    <td id="pofb2">0</td>
                    <td id="pofc2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="resultados-retangular resultados">
              <h2 className="title">Valores em Retangular</h2>
              <table className="tabela-respostas">
                <thead>
                  <tr>
                    <th scope="col">A</th>
                    <th scope="col">B</th>
                    <th scope="col">C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="iap">0</td>
                    <td id="ibp">0</td>
                    <td id="icp">0</td>
                  </tr>
                  <tr>
                    <td id="linhaap">0</td>
                    <td id="linhabp">0</td>
                    <td id="linhacp">0</td>
                  </tr>
                  <tr>
                    <td id="faseap">0</td>
                    <td id="fasebp">0</td>
                    <td id="fasecp">0</td>
                  </tr>
                  <tr>
                    <td id="pofap">0</td>
                    <td id="pofbp">0</td>
                    <td id="pofcp">0</td>
                  </tr>
                  <tr>
                    <td id="pofap2">0</td>
                    <td id="pofbp2">0</td>
                    <td id="pofcp2">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
