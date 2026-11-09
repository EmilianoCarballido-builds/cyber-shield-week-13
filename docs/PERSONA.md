# Persona test · Week 13

## Method and persona
Fresh isolated synthetic chat, as required by the assignment. Rosa, 48, owns a stationery shop in Mexico with eight staff, uses WhatsApp, has no cybersecurity specialist, reads slowly and distrusts hidden charges. This is a Week 8 target-user hypothesis, not a persona derived from five completed interviews. Task: obtain three next actions and save the plan. The test agent received only the persona, task and ordered screenshots, without source code or the desired answer.

## Screen 01 · start · actual synthetic narrative
“Veo que dice ‘sin conexión a tus cuentas’, eso me da tranquilidad. Pero leo ‘desde $790 al mes’ y me detengo: ¿para ver mis tres pasos ya tengo que contratar? Abajo dice ‘sin cobro’; entonces supongo que ahorita no me cobran, aunque no entiendo qué recibiría pagando.”

“Dice que use un escenario aproximado. El ejemplo de papelería sí me interesa porque es mi negocio. Veo cinco personas, pero somos ocho empleados; abajo dice ‘incluyéndote’, entonces pondría nueve conmigo. Las ventas por día sí las puedo calcular. Donde pregunta quién me ayudaría, pondría que todavía no tengo a nadie.”

“Me aparece ‘Datos y registro anterior borrados’. No sé qué se borró ni si hice algo mal. Busco cómo seguir, pero en esta imagen no alcanzo a ver un botón para obtener mis pasos.”

## Screen 02 · baseline result · actual synthetic narrative
“Ya veo tres pasos. El primero sí lo entiendo: buscar a alguien de confianza. Puedo preguntarle a mi contador si conoce a alguien. Pero luego me pide anotar dónde está mi copia y quién la configuró. ¿Copia de qué? No sé si se refiere a mis archivos, al sistema de ventas o al WhatsApp.”

“El segundo dice que le pida una prueba a mi proveedor. Yo todavía no tengo proveedor de sistemas; me quedo pensando si primero tengo que contratar a alguien. ‘Recuperar la operación’ me cuesta entenderlo; recuperar un archivo sí lo entiendo mejor.”

“El tercero dice ‘doble paso para entrar’. Pienso que será algún código adicional, pero no sé cómo se llama en mi correo. Otra vez me manda con el proveedor.”

“Me quedo con una tarea clara para hoy: pedirle una referencia a mi contador. Sí veo las tres acciones, pero para hacer las otras dos necesito ayuda. Ahora quiero guardar este plan. En lo que veo no encuentro dónde guardarlo ni cómo mandármelo por WhatsApp. Aquí me quedaría detenida.”

## Confusions and action
1. Saving was not apparent in the visible baseline result area: added Guardar mi plan (.txt) next to result heading, with human-readable download. Baseline already had a JSON summary farther down; this was discoverability in screenshots, not proof that saving was impossible.
2. Two later actions require a provider Rosa does not yet have. First action already names a trusted referral; real-user validation still needed.
3. Price/coverage uncertainty: remains a hypothesis despite explicit conceptual/no-charge labels.
4. “Tu copia”, “doble paso” and “recuperar la operación” need interpretation; retain for real-session probes.
5. Reset notice worried Rosa. Notice was visible because the researcher reset before capture; it is a test setup artifact, not evidence of spontaneous user data loss.

## Retest and screenshot correction
The first corrected screenshot (03-fixed.png) was poorly framed: it cut off the button. Rosa still could not identify it. That result was not counted as a failed product fix. A corrected capture (04-save-visible.png) shows the full result heading and button.

Rosa's actual retest: “Ahora sí veo el botón verde ‘Guardar mi plan (.txt)’, junto al título. Ese sería el que elegiría para guardar mis pasos. No sé qué significa ‘.txt’ ni dónde quedaría guardado, pero ‘Guardar mi plan’ sí lo entiendo.”

Remaining concerns: what copy to review, lack of provider, monthly scope and meaning of double-step access. Persona did not click or download; the primary agent separately verified the real public-site download and read its contents. The screenshots used default five-person data, not completed Rosa answers; the mismatch was a test limitation, not miscalculation.

## Evidence and limits
Ordered images: evidence/01-start.png, evidence/02-result.png, evidence/03-fixed.png (cropped), evidence/04-save-visible.png (corrected). Fresh persona context: /root/persona_test. Synthetic statements are not real quotes, five-user evidence, return proof or a measured 10:1 result. Real observations and a fix of the highest real-user pain remain pending.
