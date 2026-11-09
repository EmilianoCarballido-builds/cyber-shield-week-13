export const VERSION = 'week13-baseline-1';
const EVENTS = new Set(['diagnosis_started','validation_failed','plan_viewed','plan_exported','feedback_submitted','session_reset']);
export function createSession() {
  const started = performance.now();
  const sessionId = crypto.randomUUID();
  const events = [];
  return {
    record(event, step, outcome) {
      if (!EVENTS.has(event)) throw new Error('Unknown event');
      if (!['diagnosis','plan','feedback','session'].includes(step)) throw new Error('Unknown step');
      if (!['started','success','invalid','useful','unclear','reset'].includes(outcome)) throw new Error('Unknown outcome');
      events.push({sessionId, version:VERSION, elapsedMs:Math.round(performance.now()-started), event, step, outcome});
    },
    snapshot() { return events.map(event => ({...event})); }
  };
}
