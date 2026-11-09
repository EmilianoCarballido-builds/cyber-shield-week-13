import test from 'node:test';
import assert from 'node:assert/strict';
import {createSession, VERSION} from '../src/session.js';
test('event export contains only allowed metadata and reset isolates sessions',()=>{
 const first=createSession();first.record('plan_viewed','plan','success');
 const exported=first.snapshot();assert.deepEqual(Object.keys(exported[0]).sort(),['elapsedMs','event','outcome','sessionId','step','version'].sort());
 assert.equal(exported[0].version,VERSION);assert.ok(exported[0].elapsedMs>=0);
 exported[0].outcome='modified';assert.equal(first.snapshot()[0].outcome,'success');
 const next=createSession();assert.deepEqual(next.snapshot(),[]);next.record('session_reset','session','reset');assert.notEqual(next.snapshot()[0].sessionId,first.snapshot()[0].sessionId);
 assert.throws(()=>first.record('secret','plan','success'));
 assert.throws(()=>first.record('feedback_submitted','feedback','private free text'));
});
