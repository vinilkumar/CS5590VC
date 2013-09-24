import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapred.FileInputFormat;
import org.apache.hadoop.mapred.FileOutputFormat;
import org.apache.hadoop.mapred.JobClient;
import org.apache.hadoop.mapred.JobConf;
import org.apache.hadoop.mapred.lib.LongSumReducer;
import org.apache.hadoop.mapred.lib.TokenCountMapper;


	public class WordCount {
		public static void main(String[] args) {
		JobClient client = new JobClient();
		JobConf conf = new JobConf(WordCount.class);
		
		FileInputFormat.addInputPath(conf, new Path("/home/idcuser2/"));/// The dir here is the Hadoop directory
		FileOutputFormat.setOutputPath(conf, new Path("out2"));
		conf.setOutputKeyClass(Text.class);
		conf.setOutputValueClass(LongWritable.class);
		
		conf.setMapperClass(TokenCountMapper.class);
		conf.setCombinerClass(LongSumReducer.class); 
		conf.setReducerClass(LongSumReducer.class); 
		client.setConf(conf);
		try {
		JobClient.runJob(conf);
		} catch (Exception e) {
		e.printStackTrace();
		}
		}
		}

