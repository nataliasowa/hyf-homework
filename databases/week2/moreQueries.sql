-- Part 3: More queries 

-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.id,user.id AS UI,task.title,user.email ,user.name from task
JOIN user ON task.user_id=user.id
WHERE user.email like "%@spotify.com";


-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title, user.name, status.name
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
JOIN status ON task.status_id = status.id
WHERE user.name = 'Donald Duck' AND status.name='Not started';


-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT title, month(created), user.name Created_by
FROM task
JOIN user ON task.user_id=user.id
WHERE user.name = 'Maryrose Meadows' AND month(created)=(09);

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by)
SELECT COUNT(task.id) AS "Task`s_count", month(task.created)
FROM task
group by month(task.created)
order by  month(task.created);
